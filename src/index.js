module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openArr = [ '(', '{', '|', '['];
  let accond = {};
  bracketsConfig.forEach(i =>{
    accond[i[1]] = i[0];
    if(!openArr.includes(i[0])){
      openArr.push(i[0]);
    }
  })
  for(let i = 0; i < str.length; i++){
    if (stack.length){
      if(stack[stack.length - 1] === accond[str[i]]){
        stack.pop()
      }
      else if(openArr.includes(str[i])){
          stack.push(str[i]);
      }
      else{
        return false;
      }
    }    
    else{
      if (openArr.includes(str[i])){
        stack.push(str[i]);
      }
      else{
      return false;
      }
    }
  }
  if (stack.length){
    return false;
  }
  else{
    return true
  }
}
