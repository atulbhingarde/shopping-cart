function FilterThem()
 {
   // alert("Hi there " + document.getElementById('thisname').value);
   myAdd();
   document.getElementById('inputgroup').style.display = "block";

 }
const render = function () {
    //$('.allinfo').empty();

    // var $('.allinfo') = [];
    //NameFilter = document.getElementById('thisname').value ;
    //var re = new RegExp(NameFilter, 'ig');
    alert(" hi length of the list is " + employeeList.length ) ;
    var test = "<div id=\"block\" style=\"background-color:grey;color:white;padding:20px;border-style:solid;\">";
    for (let i = 0; i < employeeList.length; i++) 
       {
        // alert(employeeList[i].name);
        //prompt(employeeList);
        // prompt("info at this stage is " + Object.keys($('.allinfo')).length + " " + $('.allinfo').length );
        // $('.allinfo').append(`<p>employeeList[i].name</p> <p>employeeList[i].officeNum</p> <p>employeeList[i].phoneNum</p> <br>`);
        // var patt1 = /NameFilter/ig ; 
        var str = employeeList[i].name ; 
        // var re = new RegExp(NameFilter, 'ig');
        // var t1 = str.match(re)
        // prompt(" tring to locate "+ NameFilter + " in " + str + " and located " + t1 );
        // prompt(" this is "+ employeeList[i].name.search(/NameFilter/ig) + " in " + employeeList[i].nam );
        test += '<div id=\"block\">'+employeeList[i].name+'<br>'+employeeList[i].Price+'</div>' ; 

        /* if ( (  NameFilter === "" ) || ( NameFilter === employeeList[i].name ) || ( t1 != null ) )     
        // if ( (  NameFilter === "" ) || ( employeeList[i].name.search(/NameFilter/i) === 0 ) ) 
          { 
            // alert(" this is not " + NameFilter + " is in " + employeeList[i].name )

            test += '<div id=\"block\">'+employeeList[i].name+'<br>'+employeeList[i].officeNum+'<br>'+employeeList[i].phoneNum+'</div>' ; 
          } else 
          { 
           // may be keep quiet for a while will see how to handle this, but not much prompt.
           // alert(" sorry this is not " + NameFilter + " is not in " + employeeList[i].name )
          }; */
        // alert(test);
       }
       alert(test);
       // prompt('.allinfo');
       // test = test + "</div>";
       // alert(test);
       return test;

    };
    //render();
    //$('#view').on('click', render()); 
    /* 
    $(function () {

        //find the links in the `.Button` list and bind a click event handler to them
        $('.Buttons').find('a').on('click', function () {
    
            //alert the text of the clicked element
            alert($(this).text());
    
            //prevent the normal behavior of the link, also stop the propagation of the event so no other elements fire event handlers for this event
            return false;
        });
    });
*/
    const myView = function (link) {
        //alert(link.innerText+"ha ha ");
        var x = document.getElementById('inputgroup');
        document.getElementById('inputgroup').style.display = "none";
        document.getElementById('inputgroup2').style.display = "block";
        document.getElementById('JustDisplay').style.display = "none";
        // document.getElementById('inputgroup2').add("sticky");

        /* if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        } */
        //x.textContent.append("hi");
        //alert(x);
        //alert(" hi this it " + document.getElementById("inputgroup").innerHTML.valueOf());
        let content = document.getElementById("inputgroup2").innerHTML ;
        // alert(' before '+ content);
        contnet = document.getElementById('inputgroup2').innerHTML = render(); // working 
        // content =+ render();
        // prompt(' after '+ content);
        // render();
        // $nodeList.display;
    };
    const myAdd = function (link) {
        //alert(link.innerText+"ha ha ");
        //document.getElementById("searchIt").textContent="Add";
        var x = document.getElementById('box1');
        content = document.getElementById('box1').innerHTML = render(); // working
        // document.getElementById("box1").textContent="Add";
        // document.getElementById('inputgroup').style.display = "block";
        // document.getElementById('inputgroup2').style.display = "block";
        
        

        /* if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        } */
        //x.textContent.append("hi");
        //alert(x);
        //alert(" hi this it " + document.getElementById("inputgroup").innerHTML.valueOf());
        let content = document.getElementById("inputgroup2").innerHTML ;
        // alert(' before '+ content);
        content = document.getElementById('inputgroup2').innerHTML = render(); // working
        
        // content =+ render();
        // prompt(' after '+ content);
        // render();
        // $nodeList.display;
    };
    const myVerify = function(link){
        document.getElementById("searchIt").textContent="Verify";
        document.getElementById('inputgroup').style.display = "block";
        document.getElementById('inputgroup2').style.display = "block";
        document.getElementById('JustDisplay').style.display = "none";
        //document.getElementById('inputgroup').classList.add("sticky");
        document.getElementById('inputgroup').style.position = "fixed";
        // document.getElementById('Myverify').style.paddingTop = "2%";

        /* if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        } */
        //x.textContent.append("hi");
        //alert(x);
        //alert(" hi this it " + document.getElementById("inputgroup").innerHTML.valueOf());
        let content = document.getElementById("MyVerify").innerHTML ;
        //alert(' before '+ content);
        content = document.getElementById('Myverify').innerHTML = render(); // working
        
        // content =+ render();
        // prompt(' after '+ content);
        // render();
        // $nodeList.display;
    }
