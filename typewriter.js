const sentence = "hello there from lighthouse labs";
const delay = num => {

    for(const char of sentence) {
        
        num += 100;
        setTimeout(() => { 
        process.stdout.write(char);


      }, num); 
    }

    setTimeout(() => {

        console.log();
        
    }, sentence.length * 100);
    

}


delay(0);
