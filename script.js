safeCall = function(f){
  try {
      f();
      return true;
  } catch (e) {
      return false;
  }
};