let getTitle = new Promise(function(resolve,reject){

    //return the title of the current page

    let isTitleReceived = false;  //promises is not resolved

    if(isTitleReceived){

        resolve('Print the title');
    }else{

        reject('Title not printed');
    }



});

getTitle.then(function(resolvetext){


    console.log(resolvetext);

}).catch(function(rejecttext){

    console.log(rejecttext);
});
