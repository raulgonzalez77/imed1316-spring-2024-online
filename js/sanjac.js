//$( document ).ready(function() {
document.addEventListener('DOMContentLoaded', function () {
  // do something here ...    
  
    var cur_url = window.location.href;
    
    
    
    
    
    //////////////////getting parameters into variable values to pass to PHP page///////////////
    const queryString = window.location.search;
    
    const urlParams = new URLSearchParams(queryString);

    const dirID = urlParams.get('dirID')

    if (dirID == 'Sociology') {

            setTimeout(function() {

                    alert('you chose sociology');

                    var selEl = document.getElementById("input-1");
                    document.getElementById('input-1').value='Sociology';
                    //var selectElem = document.querySelector('#input-1');
                    selEl.dispatchEvent(new Event('change'));
            

            }, 5000);

    }    



    
}, false);
	
//}); //document ready		