'use strict';

const $ = require('jquery');

class Click {

	constructor( options ) {
		//setup any defaults
		this.defaults = {};
		//merge options with defaults
		this.settings = $.extend( true, {}, this.defaults, options );
		this.setup();
	}

	setup() {
		if( $('.filters').length ) {
			this.events();
		} else {
			return;
		}
	}

	events() {

    function removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    function findOne(arr2, arr) {
      return arr.some(function (v) {
        return arr2.indexOf(v) >= 0;
      });
    }

    function matchAll(superset, subset) {
      return subset.every(function (value) {
        return (superset.indexOf(value) >= 0);
      });
    }

    const contentTypes = $('#content-cats input');
    const workflows = $('#content-tags input');

    const filters = $('.js-filter-list a');
    let activeFilters = [];
    let activeContentTypes = [];

    contentTypes.on('click', function(){
      let el = $(this);
      let filter = el.val();
      if( activeContentTypes.includes(filter) ) {
        removeItemOnce(activeContentTypes, filter);
      } else {
        activeContentTypes.push(filter);
      }
      updatePosts();
      setTimeout(function(){
        $('body').removeClass('filters-open');
      }, 200);
    });

    workflows.on('click', function(){
      let el = $(this);
      let filter = el.val();
      if( activeFilters.includes(filter) ) {
        removeItemOnce(activeFilters, filter);
      } else {
        activeFilters.push(filter);
      }
      updatePosts();
      setTimeout(function(){
        $('body').removeClass('filters-open');
      }, 200);
    });

    const filteredList = $('.js-filtered-list');
    const item = $('.js-resource');

    function updatePosts() {
      let count = 0;
      filteredList.addClass('is-thinking');
      setTimeout(function(){
        filteredList.removeClass('is-thinking');
        if( activeFilters.length || activeContentTypes.length ) {
          filteredList.addClass('is-filtered');
        } else {
          filteredList.removeClass('is-filtered');
          item.removeClass('has-active-filter');
        }
        item.each(function(){
          let item = $(this);
          let tags = item.attr('data-tags');
          tags = tags.split(", ");

          if( activeFilters.length && activeContentTypes.length ) {
            let match = 0;
            if( findOne(activeFilters, tags) ) {
              item.addClass('has-active-filter');
              match++;
            }
            if( findOne(activeContentTypes, tags) ) {
              item.addClass('has-active-filter');
              match++;
            }
            if(match != 2) {
              item.removeClass('has-active-filter');
            }
          }

          if( activeFilters.length && activeContentTypes.length == 0 ) {
            if( findOne(activeFilters, tags) ) {
              item.addClass('has-active-filter');

            } else {
              item.removeClass('has-active-filter');
            }
          }

          if( activeContentTypes.length && activeFilters.length == 0 ) {
            if( findOne(activeContentTypes, tags) ) {
              item.addClass('has-active-filter');
            } else {
              item.removeClass('has-active-filter');
            }
          }
        });
        window.scrollTo(window.scrollX, window.scrollY - 1);
        window.scrollTo(window.scrollX, window.scrollY + 1);
      }, 1200);

    }

    $('.js-reset-filters').click(function(e){
      e.preventDefault();
      activeFilters = [];
      activeContentTypes = [];
      contentTypes.val('');
      workflows.val('');
      updatePosts();
    });


    function getParams() {
      let urlParams = new URLSearchParams(window.location.search);
      urlParams = urlParams.get('filters');
      let params = '';

      if( urlParams ) {
        params = urlParams;
      }

      if( params !== '' ) {

      }
    }

    var filterGroup = $('.filters');
    $('.js-filter-toggle').click(function(e){
      e.preventDefault();
      if( $('body').hasClass('filters-open') ) {
        $('body').removeClass('filters-open');
      } else {
        $('body').addClass('filters-open');
      }
    });

    // Check for query params
    $(document).ready(function(){
      getParams();
    });


    $('.js-clear-filters').click(function(){
      activeFilters = [];
      updatePosts();
    });

	}

}

module.exports = Click;
