const e={email:"",message:""},t=document.querySelector(".feedback-form"),o=t.elements.email,l=t.elements.message,n=()=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))},r=()=>{const a=localStorage.getItem("feedback-form-state");if(a){const s=JSON.parse(a);e.email=s.email||"",e.message=s.message||"",o.value=e.email,l.value=e.message}};document.addEventListener("DOMContentLoaded",r);t.addEventListener("input",a=>{const{name:s,value:m}=a.target;e[s]=m.trim(),n()});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.reset()});
//# sourceMappingURL=2-form-YNi6wSEk.js.map
