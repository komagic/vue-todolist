
Vue.component('todo-footer',{
template:`<footer class="footer">
	            <span class="todo-count">
	            	<strong>{{unSelected}}</strong>
	            	<span>条未选中</span>
	            </span>
            </footer>`
})

let v =  new Vue({
	el:'.todoapp',
	data:{
		arr:[
			{
				title:'多多对对',
				checked:false,
				id:0,
				show:true
			},
			{
				title:'呵呵呵',
				checked:false,
				id:1,
				show:true
			}
		],
		val:'',
		all:false,
		show:true
	},
	computed:{
			unSelected(){
				let array=this.arr.filter((e)=>{
				return e.checked === false ;
			});
		
			return array.length;
			}
	},

	methods:{
		showAll(){
			this.arr.forEach((e)=>{
					e.show = true;
			});
		},
	actived(){
		this.arr.forEach((e)=>{
					e.show = !e.checked;
			});
	},
	completed(){
		this.arr.forEach((e)=>{
					e.show = e.checked;
			});
	}
		,
		keyup(){
			this.arr.push({
				title:this.val,
				checked:false,
				id:+new Date
			});
			this.val = '';
			this.allFn();
		},
		click(val){
			this.arr = this.arr.filter((e)=>{
				return e.id != val.id;
			});
		},
		allFn(){
			/*
				当点击某个的时候去看看别的是否为选中状态，并且把结果给all（布尔值）
				every
			*/
			this.all = this.arr.every((e)=>e.checked);
		},
		allClick(){
			this.arr.forEach((e)=>{
					e.checked = this.all;
			});
		}
	}
});