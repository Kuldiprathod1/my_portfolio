burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav_list = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')




burger.addEventListener('click',()=>{
	rightNav.classlist.toggle('v-class-resp');
	nav_list.classlist.toggle('v-class-resp');
	navbar.classlist.toggle('h-class-resp');
	
})