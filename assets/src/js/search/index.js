/**
 * Global variables.
 */
import { toggleAccordionContent } from '../utils';

const { customElements, HTMLElement } = window;

/**
 * Initialize data store.
 */
import { store } from './data';
const { getState, subscribe } = store;

/**
 * NintyNineSearch Class.
 */
class NintyNineSearch extends HTMLElement {
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		
		// Initialize State.
		const state = getState();
		state.initialize( search_settings );
	}
}

/**
 * Clear All Filters.
 */
class NintyNineClearAllFilters extends HTMLElement {
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		
		const { clearAllFilters } = getState();
		this.clearAllFiltersButton = this.querySelector( 'button' );
		
		this.clearAllFiltersButton.addEventListener( 'click', () => {
			clearAllFilters();
		} );
	}
}

/**
 * NintyNineFilters Class.
 */
class NintyNineFilters extends HTMLElement {}

/**
 * NintyNineCheckboxAccordion Class.
 */
class NintyNineCheckboxAccordion extends HTMLElement {
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		
		// Elements.
		this.filterKey = this.getAttribute( 'key' );
		this.content = this.querySelector( '.checkbox-accordion__content' );
		this.accordionHandle = this.querySelector( '.checkbox-accordion__handle' );
		
		if ( ! this.accordionHandle || ! this.content || ! this.filterKey ) {
			return;
		}
		
		this.accordionHandle.addEventListener( 'click', ( event ) => toggleAccordionContent( event, this, this.content ) );
	}
	
	/**
	 * Observe Attributes.
	 *
	 * @return {string[]} Attributes to be observed.
	 */
	static get observedAttributes() {
		return [ 'active' ];
	}
	
	/**
	 * Attributes callback.
	 *
	 * Fired on attribute change.
	 *
	 * @param {string} name Attribute Name.
	 * @param {string} oldValue Attribute's Old Value.
	 * @param {string} newValue Attribute's New Value.
	 */
	attributeChangedCallback( name, oldValue, newValue ) {
		/**
		 * If the state of this checkbox filter is open, then set then
		 * active state of this component to true, so it can be opened.
		 */
		if ( 'active' === name ) {
			this.content.style.height = 'auto';
		} else {
			this.content.style.height = '0px';
		}
	}
}

/**
 * NintyNineCheckboxAccordionChild Class.
 */
class NintyNineCheckboxAccordionChild extends HTMLElement {
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		
		this.content = this.querySelector( '.checkbox-accordion__child-content' );
		this.accordionHandle = this.querySelector( '.checkbox-accordion__child-handle-icon' );
		this.inputEl = this.querySelector('input');

		// Subscribe to updates.
		subscribe( this.update.bind( this ) );
		
		if ( this.accordionHandle && this.content ) {
			this.accordionHandle.addEventListener( 'click', ( event ) => toggleAccordionContent( event, this, this.content ) );
		}
		if ( this.inputEl ) {
			this.inputEl.addEventListener( 'click', ( event ) => this.handleCheckboxInputClick( event ) );
		}
	}
	
	/**
	 * Update the component.
	 *
	 * @param {Object} currentState Current state.
	 */
	update( currentState = {} ) {
		
		if ( ! this.inputEl ) {
			return;
		}

		const { filters } = currentState;
		this.inputKey = this.inputEl.getAttribute( 'data-key' );
		this.inputValue = this.inputEl.getAttribute( 'value' );
		this.selectedFiltersForCurrentkey = filters[ this.inputKey ] || [];
		this.parentEl = this.inputEl.closest( '.checkbox-accordion' ) || {};
		this.parentContentEl = this.inputEl.closest( '.checkbox-accordion__child-content' ) || {};
		
		/**
		 * If the current input value is amongst the selected filters, the check it.
		 * and set the attributes and styles to open the accordion.
		 */
		if ( this.selectedFiltersForCurrentkey.includes( parseInt( this.inputValue ) ) ) {
			this.inputEl.checked = true;
			this.parentEl.setAttribute( 'active', true );
			if ( this.parentContentEl.style ) {
				this.parentContentEl.style.height = 'auto';
			}
		} else {
			this.inputEl.checked = false;
			this.parentEl.removeAttribute( 'active' );
		}
	}
	
	/**
	 * Handle Checkbox input click.
	 *
	 * @param event
	 */
	handleCheckboxInputClick( event ) {
		const { addFilter, deleteFilter } = getState();
		const targetEl = event.target;
		this.filterKey = targetEl.getAttribute('data-key');
		
		if ( targetEl.checked ) {
			addFilter({
				key: this.filterKey,
				value: parseInt( targetEl.value ),
			});
		} else {
			deleteFilter({
				key: this.filterKey,
				value: parseInt( targetEl.value ),
			});
		}
	}
}

/**
 * NintyNineResults Class.
 */
class NintyNineResultsCount extends HTMLElement {
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		
		// Subscribe to updates.
		subscribe( this.update.bind( this ) );
	}
	
	update( currentState = {} ) {
		const { resultCount } = currentState;
		if ( null !== resultCount ) {
			this.innerHTML = `Results: ${resultCount} Posts`;
		}
	}
}

/**
 * NintyNineResults Class.
 */
class NintyNineResults extends HTMLElement {
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		
		// Subscribe to updates.
		subscribe( this.update.bind( this ) );
	}
	
	/**
	 * Update the component.
	 *
	 * @param {Object} currentState Current state.
	 */
	update( currentState = {} ) {
		const { resultMarkup, loading } = currentState;
		if ( loading ) {
			this.innerHTML = '<p>Loading...</p>';
		}
		if ( resultMarkup && ! loading ) {
			this.innerHTML = resultMarkup;
		}
	}
}

/**
 * NintyNineLoadMore Class.
 */
class NintyNineLoadMore extends HTMLElement {
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		
		// Subscribe to updates.
		subscribe( this.update.bind( this ) );
		
		this.querySelector( 'button' ).addEventListener( 'click', () => this.handleLoadMoreButtonClick() );
		this.nextPageNo = this.getAttribute( 'next-page-no' );
	}
	
	update( currentState = {} ) {
		const { pageNo } = currentState;
		if ( parseInt( this.nextPageNo ) <= parseInt( pageNo ) ) {
			this.remove();
			return null;
		}
		
	}
	
	handleLoadMoreButtonClick() {
		const { loadMorePosts } = getState();
		loadMorePosts( this.nextPageNo );
	}
}

class NintyNineLoadingMore extends HTMLElement {
	constructor() {
		super();
		// Subscribe to updates.
		subscribe( this.update.bind( this ) );
	}
	
	update( currentState = {} ) {
		const { loadingMorePosts } = currentState;
		if ( loadingMorePosts ) {
			this.innerHTML = 'Loading more posts...';
		} else {
			this.innerHTML = '';
		}
	}
}

/**
 * Initialize.
 */
customElements.define( 'nintynine-checkbox-accordion', NintyNineCheckboxAccordion );
customElements.define( 'nintynine-checkbox-accordion-child', NintyNineCheckboxAccordionChild );
customElements.define( 'nintynine-clear-all-filters', NintyNineClearAllFilters );
customElements.define( 'nintynine-filters', NintyNineFilters );
customElements.define( 'nintynine-results-count', NintyNineResultsCount );
customElements.define( 'nintynine-results', NintyNineResults );
customElements.define( 'nintynine-load-more', NintyNineLoadMore );
customElements.define( 'nintynine-loading-more', NintyNineLoadingMore );
customElements.define( 'nintynine-search', NintyNineSearch );
