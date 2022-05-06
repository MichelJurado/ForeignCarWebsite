            //questions
            const a = document.getElementById("a");
            const b = document.getElementById("b");
            const c = document.getElementById("c");
            const d = document.getElementById("d");
            const e = document.getElementById("e");
            const f = document.getElementById("f");
            const g = document.getElementById("g");
            const h = document.getElementById("h");

           const cars= {
               _cars:[{
                   make:'Lamborgini',
                   model:'Urus',
                   engine: 'V8',
                   doors:'4'
               },{
                   make:'Lamborgini',
                   model:'Aventador',
                   engine: 'V12',
                   doors:'2'
               },{
                   make:'Lamborgini',
                   model:'Huracan',
                   engine: 'V10',
                   doors:'2'
               },{
                   make:'Ferrari',
                   model:'458',
                   engine: 'V8',
                   doors:'2'
               },{
                   make:'Ferrari',
                   model:'488',
                   engine: 'V8',
                   doors:'2'
               },{
                   make:'Buggati',
                   model:'Chiron',
                   engine: 'V16',
                   doors:'2'
               },{
                   make:'Mclaren',
                   model:'720',
                   engine: 'V8',
                   doors:'2'
               },{
                   make:'Porsche',
                   model:'Cayenne',
                   engine: 'V6',
                   doors:'4'
               },{
                   make:'Porsche',
                   model:'911',
                   engine: 'V6',
                   doors:'2'
               }
                    ]
           }

           

           function yourCar(){
               //will print out luxury sedans

            if(h.selected){
                if(a.value === "luxury" && b.value === "4" && c.value=== "v6"){
                
                const output = document.getElementById("submit-output");
                let newOutput = document.createElement('h2');
                newOutput.textContent = `This car is for you! ${cars._cars[7].make} ${cars._cars[7].model}`
                newOutput.style.color = "red";
                newOutput.style.textAlign = "center";
                output.appendChild(newOutput);
                
            }

            if(a.value === "luxury" && b.value === "4" && c.value=== "v8"){
                
                const output1 = document.getElementById("submit-output");
                let newOutput = document.createElement('h2');
                newOutput.textContent = `This car is for you! ${cars._cars[0].make} ${cars._cars[0].model}`
                newOutput.style.color = "red";
                newOutput.style.textAlign = "center";
                output1.appendChild(newOutput);
                
            }

            //will print out luxury coupes
            else if(a.value === "luxury" && b.value === "2" && c.value=== "v6"){

                const output2 = document.getElementById("submit-output");
                let newOutput = document.createElement('h2');
                newOutput.textContent = `This car is for you! ${cars._cars[8].make} ${cars._cars[8].model}`
                newOutput.style.color = "red";
                newOutput.style.textAlign = "center";
                output2.appendChild(newOutput);
            }
            //will print out fast v8 coupes
            else if(a.value === "speed" && b.value === "2" && c.value=== "v8"){
                

                const output3 = document.getElementById("submit-output");
                let newOutput = document.createElement('h2');
                newOutput.textContent = `These cars are for you! ${cars._cars[3].make} ${cars._cars[3].model},
                ${cars._cars[4].make} ${cars._cars[4].model}, and the ${cars._cars[6].make} ${cars._cars[6].model}.`
                newOutput.style.color = "red";
                newOutput.style.textAlign = "center";
                output3.appendChild(newOutput);

            }
            //will print out fast v10 coupes
            else if(a.value === "speed" && b.value === "2" && c.value=== "v10"){

                const output4 = document.getElementById("submit-output");
                let newOutput = document.createElement('h2');
                newOutput.textContent = `This car is for you! ${cars._cars[2].make} ${cars._cars[2].model}`
                newOutput.style.color = "red";
                newOutput.style.textAlign = "center";
                output4.appendChild(newOutput);
            }
             //will print out fast v12 coupes
             else if(a.value === "speed" && b.value === "2" && c.value=== "v12"){

                const output5 = document.getElementById("submit-output");
                let newOutput = document.createElement('h2');
                newOutput.textContent = `This car is for you! ${cars._cars[1].make} ${cars._cars[1].model}`
                newOutput.style.color = "red";
                newOutput.style.textAlign = "center";
                output5.appendChild(newOutput);
            }
            //will print out bugatti
            else if(a.value === "speed" && b.value === "2" && c.value=== "v16"){

                const output6 = document.getElementById("submit-output");
                let newOutput = document.createElement('h2');
                newOutput.textContent = `This car is for you! ${cars._cars[5].make} ${cars._cars[5].model}`
                newOutput.style.color = "red";
                newOutput.style.textAlign = "center";
                output6.appendChild(newOutput);
            }
            }

            
            //will print out list of cars between 100,000 and 250,000
            else if(d.selected){ //the .selected lets you get the value of what has been selected
               //using dom to add elements to current webpage 
                
                const output7 = document.getElementById("submit-output");
                let newOutput = document.createElement('h2');
                newOutput.textContent = `We recommend looking into a ${cars._cars[2].make} ${cars._cars[2].model},
                               ${cars._cars[3].make} ${cars._cars[3].model},
                               ${cars._cars[7].make} ${cars._cars[7].model}, or a 
                               ${cars._cars[8].make} ${cars._cars[8].model}.`
                //inline styles
                newOutput.style.color = "red";
                newOutput.style.textAlign = "center";
                output7.appendChild(newOutput);
            }
            
            
            //will print out list of cars between 250,000 and 500,000
            else if(e.selected){

                //using dom to add elements to current webpage 
                const output8 = document.getElementById("submit-output");
                let newOutput = document.createElement('h2');
                newOutput.textContent = `We recommend looking into a ${cars._cars[0].make} ${cars._cars[0].model},
                               ${cars._cars[1].make} ${cars._cars[1].model},
                               ${cars._cars[4].make} ${cars._cars[4].model}, or a 
                               ${cars._cars[6].make} ${cars._cars[6].model}.`
                //inline styles
                newOutput.style.color = "red";
                newOutput.style.textAlign = "center";
                output8.appendChild(newOutput);

            
            }
            else if(f.selected){
                const output9= document.getElementById("submit-output");
                let newOutput = document.createElement('h2');
                newOutput.textContent = 'No cars under this price range.'
                newOutput.style.color = "red";
                newOutput.style.textAlign = "center";
                output9.appendChild(newOutput);
            }
            else if(g.selected){

                const output10= document.getElementById("submit-output");
                let newOutput = document.createElement('h2');
                newOutput.textContent = `We recommend looking into a ${cars._cars[5].make} ${cars._cars[5].model}.`
                newOutput.style.color = "red";
                newOutput.style.textAlign = "center";
                output10.appendChild(newOutput);

                
            }
            
            else{
                document.write('Error');
            } 
           }
