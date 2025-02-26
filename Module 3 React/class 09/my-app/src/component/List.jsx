export const List = () => {
  const employees = ["minhaj", "ali", "imran"];

//   for(var i=0; i<employee.length; i++){
//       console.log(employee[i])
//   }

  // employee.map((val, index)=>{
  //     console.log(val)
  // })

//   const api = [
//     {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//     }
//     },
//     {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//     "street": "Victor Plains",
//     "suite": "Suite 879",
//     "city": "Wisokyburgh",
//     "zipcode": "90566-7771",
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//     "name": "Deckow-Crist",
//     "catchPhrase": "Proactive didactic contingency",
//     "bs": "synergize scalable supply-chains"
//     }
//     },
//     {
//     "id": 3,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//     "street": "Douglas Extension",
//     "suite": "Suite 847",
//     "city": "McKenziehaven",
//     "zipcode": "59590-4157",
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//     "name": "Romaguera-Jacobson",
//     "catchPhrase": "Face to face bifurcated interface",
//     "bs": "e-enable strategic applications"
//     }
//     },
//     ]

const data = [{name: 'minhaj', age: '23'}, {name: 'hasseeb', age: '21'}, {name: 'talha', age: '18'}]

  return (
    <div>
        {/* <ul>
        {
            employees.map((employee,index)=> {
                // console.log(employee)
                return (
                    <li key={index}>
                        {employee}
                    </li>
                )
            })
        }
        </ul> */}

        {/* {
            data.map((item, index)=>{
                console.log(item)
                return (
                  <div key={index}>
                    <div>
                        {item.name} : {item.age}
                    </div>
                  

                  </div>
                )
            })
        } */}

        {employees.map((emp, index)=> {
            return (
                <div key={index}>
                    {emp}
                </div>
            )
        })}
        
  
    </div>
  );
};
