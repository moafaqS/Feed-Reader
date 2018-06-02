/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
        it('url define and not empty' , function(){
            allFeeds.forEach(function(thisFeed){
                
                expect(thisFeed.url).toBeDefined();
                expect(thisFeed.url.length).not.toBe(0);
            });
            
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('url name define and not empty' , function(){
            allFeeds.forEach(function(feedName){
                
                expect(feedName.name).toBeDefined();
                expect(feedName.name.length).not.toBe(0);
            });
            
        });
        
        
    });


    /* TODO: Write a new test suite named "The menu" */
    
    describe('The menu' , function(){
        
        
        
         /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        
        it('elements should be hidden by default' , function(){
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
        it('elements should become visibie when the menu icon is clicked and hide if it clicked again' , function(){
            
             var click = $(".menu-icon-link");
            
             //menu become visible when the icon clicked
             click.click();
             expect($("body").hasClass("menu-hidden")).toBe(false);
             
             //menu hide , when the icon clicked again 
             click.click();
             expect($("body").hasClass("menu-hidden")).toBe(true);
            
            
            
        });
        
      
        
        
    });

       

    /* TODO: Write a new test suite named "Initial Entries" */
    
    describe('Initial Entries' , function(){
        
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        
        beforeEach(function(done){
            loadFeed(0,done);
        });
        
        it('should be there one entry or more' , function(){
            expect($('.entry').length).not.toBe(0);
        });
        
    });

        

    /* TODO: Write a new test suite named "New Feed Selection" */
    
    describe('New Feed Selection' , function(){
        
      /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var feed1;
        var feed2;
        
        beforeEach(function(done){
            loadFeed(0,function(){
                 feed1 = $(".feed").html();
                 done();
            });
           
        });
        
        it('feed content should be changed after feed is loaded' , function(done){
                 loadFeed(1,function(){
                 feed2 = $(".feed").html();
                 expect(feed1).not.toEqual(feed2); // to ckeck if contents of feed changed or not 
                 done();
            });
        });
        
        
        
        
        
        
        
    });

        
}());