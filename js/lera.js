var allButtons=$('#buttons>span')
console.log(allButtons)
for (let i=0;i<allButtons.length;i++) {
	$(allButtons[i]).on('click',function(x){
		var index=$(x.currentTarget).index()
		var s=index * -960
		$('#images').css({
			transform:'translateX('+ s +'px)' 
		})
		m=index
		$(allButtons).eq(m)
		.addClass('spanActive')
		.siblings('.spanActive').removeClass('spanActive')
		
	})
}

var m=0
var size=allButtons.length
allButtons.eq(m%size).trigger('click')
.addClass('spanActive')
.siblings('.spanActive').removeClass('spanActive')

timerId=setInterval(()=>{
	m+=1
	allButtons.eq(m%size).trigger('click')
	.addClass('spanActive')
	.siblings('.spanActive').removeClass('spanActive')
},1500)

$('.show-img-box').on('mouseenter',function(){
	window.clearInterval(timerId)
})
$('.show-img-box').on('mouseleave',function(){
	timerId=setInterval(()=>{
	m+=1
	allButtons.eq(m%size).trigger('click')
	.addClass('spanActive')
	.siblings('.spanActive').removeClass('spanActive')
},1500)
	
})




var allButtons=$('#buttons>span')
for (let i=0; i<allButtons.length;i++) {
	$(allButtons[i]).on('click',function(x){
		
	})
}
//
//var array = [1,5,2,3,4,2,3,1,3,4]
//function unique(array){
//	var s=array.sort()
//var arrays = []
//for (let i=0; i<s.length;i++) {
//	if (s[i]===s[i+1]) {
//		
//	} else{
//		arrays.push(s[i])
//	}
//}
//return arrays
//}
//console.log(arrays)

