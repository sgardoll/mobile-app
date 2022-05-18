const server = "http://localhost:3000/users"; 

export function fetchUsersAsync(){
    
    return fetch(server)
                .then(r=>r.json())
                .catch(e=>console.error(e)); 
}
export function addUserAsync(user){
    
    return fetch(server,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
      })
        .then(r=>r.json())
        .catch(e=>console.error(e)); 
}
export function updateUserAsync(user){
    
    return fetch(`${server}/${user.id}`,{
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
      })
        .then(r=>r.json())
        .catch(e=>console.error(e)); 
}
export function deleteUserAsync(id){
    
  return fetch(`${server}/${id}`,{
      method:'DELETE',
    })
    .catch(e=>console.error(e)); 
}