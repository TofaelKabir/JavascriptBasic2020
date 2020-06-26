describe('Promises Example',function(){
    var value_at_index = function(index){

        element(by.xpath('//div[4]/input['+index+']')).getAttribute('value').then(function(text){

            console.log(text+" getting the value from checkbox no: "+index);

        })

    }

    it('Understanding Promises Real Time',function(){
        browser.ignoreSynchronization=true; //when we work with non angular app we have to write this line, otherwise protrator can't recognize it
        browser.get("http://www.tizag.com/htmlT/htmlcheckboxes.php");

        for(var i=1; i<=4; i++){

            element(by.xpath('//div[4]/input['+i+']')).click(); //or we can do separetly all of them without for loop
            value_at_index(i);
        
        }
       
      

        browser.sleep(3000);
    });




})