const textofvo = document.querySelector('#textofvoice');
const res = document.querySelector('.result span');
const reschar = document.querySelector('.charcater span');
const resnospace = document.querySelector('.spacechar span');
const maxWord = document.querySelector('#maxWord');
const voicebtn = document.querySelector('.voiceof span');

const charCountwithSpace =(chVal)=>{

   
    chVal =chVal.split('');
    reschar.innerHTML=chVal.length;
    


}
const charWithOutspace =(noSpace)=>{
    
    noSpace=noSpace.replace(/[\n\t\s+\,\.\?]/g,"").split("");
    resnospace.innerHTML=noSpace.length;
}

function countWords(str)
{
         
        if(str    == null || str.length==0){
            res.innerHTML=0;
            reschar.innerHTML=0;
            resnospace.innerHTML=0;

        }
           
        charCountwithSpace(str);
        charWithOutspace(str);
      
            
        let wordCount = 0;
           
        let isWord = false;
        let endLine = str.length - 1;
           
        
        let ch = str.split("");
           
        for (let i = 0; i < ch.length; i++) {
               
            
            if (isLetter(ch[i]) && i != endLine)
                 
                isWord = true;
               
            
            else if (!isLetter(ch[i])  && isWord) {
               
                 
                wordCount++;
                isWord = false;
            }
               
            
            else if (isLetter(ch[i]) && i == endLine)
           
                wordCount++;
        }
           
    globalCount=wordCount; 
    res.innerHTML=wordCount;
}
  
function isLetter(c) {
    
    let code=c.charCodeAt()
    let state;
    if((code > 47 && code < 58) || c.toLowerCase() != c.toUpperCase()){
        state = true;
    }
    else{
        state= false
    }
    // console.log(c.charCodeAt() ,  c.toLowerCase())
  return state;
}
const convertIt =()=>{
  
    let utterance = new SpeechSynthesisUtterance(textofvo.value);
    
 speechSynthesis.speak(utterance);

}
  


let globalCount=0;
let WORD_LIMIT=100;

textofvo.addEventListener('keyup', function (e) {
   countWords(e.target.value)
    
})
textofvo.addEventListener('keydown', function(e){
    if (globalCount  > WORD_LIMIT - 1 && e.code !== "Backspace") {
        
        e.preventDefault();
        return;
      }

})
maxWord.addEventListener('keyup' ,function(){
    WORD_LIMIT=maxWord.value;
})

voicebtn.addEventListener('click',convertIt)