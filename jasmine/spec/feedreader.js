
$(function() {
  
    describe('RSS Feeds', function() {
       
         
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
         
        it('url define and not empty' , function(){
            allFeeds.forEach(function(thisFeed){
                
                expect(thisFeed.url).toBeDefined();
                expect(thisFeed.url.length).not.toBe(0);
            });
            
        });

        it('url name define and not empty' , function(){
            allFeeds.forEach(function(feedName){
                
                expect(feedName.name).toBeDefined();
                expect(feedName.name.length).not.toBe(0);
            });
            
        });
        
        
    });

    
    describe('The menu' , function(){
      
        
        it('elements should be hidden by default' , function(){
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

       
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

       

    
    describe('Initial Entries' , function(){
     
        beforeEach(function(done){
            loadFeed(0,done);
        });
        
        it('should be there one entry or more' , function(){
            expect($('.feed .entry').length).not.toBe(0);
        });
        
    });

        

  
    describe('New Feed Selection' , function(){
        
     
        var feed1;
        var feed2;
        
        
        beforeEach(function(done){
            
            loadFeed(0, function () {
               // great place to get content of feed container
               feed1 = $('.feed').html();
               loadFeed(1, function () {
                   // get content of feed container
                   done();
               });
            });
        });
        
        // to compare the current content of feed with prevoius one 
        it('load the current feed content' , function(){
            
            feed2 = $('.feed').html();
            
            expect(feed1).not.toEqual(feed2);
            
        });
        
        
        
    });

        
}());
