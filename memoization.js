/**
 * Memoization is a form of caching where the return value of a
 * function is cached based on its parameters. If the parameter
 * of that function is not changed, the cached version of the
 * function is returned.
 * 
 * Although using memoization saves time, it results in larger 
 * consumption of memory since we are storing all the computed results.
 */

function memoizedAddTo256(){
    var cache = {};
  
    return function(num){
      if(num in cache){
        console.log("cached value");
        return cache[num]
  
      }
      else{
        cache[num] = num + 256;
        return cache[num];
      }
    }
  }
  
  var memoizedFunc = memoizedAddTo256();
  
  console.log(memoizedFunc(20)); // Normal return
// if we run memoizedFunc function with the same parameter,
// instead of computing the result again, it returns the cached result.
  console.log(memoizedFunc(20)); // Cached return