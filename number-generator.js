export const numberGenerator = () => {
    let resources = "0123456789";
    let result = [];
  
    while (result.length < 4) {
      let currentNum = Number(resources[Math.floor(Math.random() * 10)]);
      if (!result.includes(currentNum)) {
        result.push(currentNum);
      }
    }
  
    return result;
  };