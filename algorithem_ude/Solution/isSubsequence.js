function isSubsequence(a,b){
 


    let idxA=0;
    let idxB=0;

    while(idxA<a.legnth && idxB<b.length){
        

        if(a[idxA]===b[idxB]){
            idxA++;
            idxB++;
        }else{
            idxB++;
        }
    }
        if(idxA===a.length){
            return true;
        }else{
            return false;
        }

    }
