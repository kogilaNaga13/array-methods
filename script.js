		
			// 1. Write a JavaScript program to display the values (i.e. display book name, author name and reading status) of the following books. If the reading status  is true 

			var library = [  
			   { 
				   author: 'Bill Gates', 
				   title: 'The Road Ahead', 
				   readingStatus: true 
			   }, 
			   { 
				   author: 'Steve Jobs', 
				   title: 'Walter Isaacson', 
				   readingStatus: true 
			   }, 
			   { 
				   author: 'Suzanne Collins', 
				   title:  'Mockingjay: The Final Book of The Hunger Games',  
				   readingStatus: false 
			   }]; 

			 
			for(let i=0;i<library.length;i++){
				console.log(library[i]);
			if(library[i].readingStatus){
			console.log('author:${library[i].author}');
			console.log('title:${library[i].title}');
			console.log('readingStatus:${library[i].readingStatus}');
			}
			}

			
 

 

//////////////////////////////////////////////////////////////////////////////////////////////////////
		
				// 2.

				// Write a code to replace the value 6 in the following object with 606,  

				let obj = { 

				foo: { a: "hello", b: "world" }, 

				bar: ["example", "mem", null, { xyz: 6 }, 88], 

				qux: [4, 8, 12] 

				}; 
				
				console.log(obj.bar[3].xyz=606);
				console.log(obj);
				
				
				
	///////////////////////////////////////////////////////////////////////////////////////			
				
				// 3.  

				const users = [ 

				  { 

					first_name: 'Mike', 

					last_name: 'Sheridan' 

				  }, 

				  { 

					first_name: 'Tim', 

					last_name: 'Lee' 

				  }, 

				  { 

					first_name: 'John', 

					last_name: 'Carte' 

				  } 

				]; 

				// Using Map method 

				// output:['Mike Sheridan', 'Tim Lee', 'John Carte'] 
				
				const user=users.map(function(a){
					return a.first_name+' '+a.last_name;
				});
				console.log(user);
				
				
	///////////////////////////////////////////////////////////////////////////////
	
	
		// 4.

		const users1 = [ 

		  { 

			first_name: 'Mike', 

			last_name: 'Sheridan', 

			age: 30 

		  }, 

		  { 

			first_name: 'Tim', 

			last_name: 'Lee', 

			age: 45 

		  }, 

		  { 

			first_name: 'John', 

			last_name: 'Carte', 

			age: 25 

		  } 

		]; 

			// Using Map method 

			// Output:["Sheridan", "Lee", "Carte"] 
			
			

			const user1=users1.map(function(a){
					return a.last_name;
				});
				console.log(user1);

////////////////////////////////////////////////////////////////////////////////




			// 5. 
			
			const users2 = [ 

			  { 

				first_name: 'Mike', 

				location: 'London' 

			  }, 

			  { 

				first_name: 'Tim', 

				location: 'US' 

			  }, 

			  { 

				first_name: 'John', 

				location: 'Australia' 

			  } 

			];  

			// Using Map method 

			// ["Mike lives in London", "Tim lives in US", "John lives in Australia"] 

	

					const user2=users2.map(function(a){
						return a.first_name+" lives in "+a.location;
					});
					console.log(user2);
					
					
	//////////////////////////////////////////////////////////////////////////////////////////////
	
				// 6. 
				
				
				const employees = [ 

			  { name: 'David Carlson', age: 30 }, 

			  { name: 'John Cena', age: 34 }, 

			  { name: 'Mike Sheridan', age: 25 }, 

			  { name: 'John Carte', age: 50 } 

			// ]; 

			// Using filter method 

			// Output:[ { name: "John Cena", age: 34 }, { name: "John Carte", age: 50 }] 
	
	
	let res = employees.filter(function(val){
		return val.age>=34;
	});
	
	console.log(res);
	
//////////////////////////////////////////////////////////////////////////////////////////////////

	// 7. Using Filter Method: 

  
			const students = [ 

			  { name: 'Quincy', grade: 96 }, 

			  { name: 'Jason', grade: 84 }, 

			  { name: 'Alexis', grade: 100 }, 

			  { name: 'Sam', grade: 65 }, 

			  { name: 'Katie', grade: 90 } 

			]; 

			  

			// Output:[ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ] 

  
	
	let res=students.filter(function(val){
		return val.grade>=90;
	});
	
	console.log(res);
	
	////////////////////////////////////////////////////////////////////////////////////////////////////
	 

		// 8. Using Filter Method: 

		  

		let users3 = [ 

			{ name: 'John', age: 25, occupation: 'gardener' }, 

			{ name: 'Lenny', age: 51, occupation: 'programmer' }, 

			{ name: 'Andrew', age: 43, occupation: 'teacher' }, 

			{ name: 'Peter', age: 81, occupation: 'teacher' }, 

			{ name: 'Anna', age: 47, occupation: 'programmer' }, 

			{ name: 'Albert', age: 76, occupation: 'programmer' }, 

		] 

		  

		// Output:[ { name: 'Lenny', age: 51, occupation: 'programmer' }, { name: 'Anna', age: 47, occupation: 'programmer' }, 

			// { name: 'Albert', age: 76, occupation: 'programmer' },] 
	
	let ans=users3.filter(function(val){
		returnval.occupation==="programmer";
	});
	console.log(ans);
	
///////////////////////////////////////////////////////////////////////////////

