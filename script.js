class Assistant{
    constructor(addBtn,container,){
        this.addBtn=addBtn;
        this.container=container;
    }
    creator(){
        this.addBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        let c = document.createElement('div');
        c.classList.add('input');
        c.innerHTML=`<input type="text" name="notes" class="note">
        <div class="image-delete"></div>`;
        this.container.append(c);
        this.deleter(c);
        return this.container;
    })}
    deleter(c){
        c.addEventListener('click', (e)=>{
    if (e.target.classList.contains('image-delete')){
        e.preventDefault();
        e.stopPropagation();
        c.remove();
    }
    })
    }
    deleteFirstInput(){
        let fI = document.querySelector('#firstInput');
        fI.addEventListener('click',(e)=>{
                if (e.target.classList.contains('image-delete')){
                    e.preventDefault();
                    e.stopPropagation();
                    fI.remove();
                }
                })
    }
}

class SortAssistant{
    constructor(inputContainer,btnSort){
        this.inputContainer=inputContainer;
        this.btnSort=btnSort;
    }
    getArr(){
        let nodeList=this.inputContainer.querySelectorAll('.input');
        let arr=[];
        nodeList.forEach(el=>{arr.push(el)})
        return arr;
    }
    sorter(arr,direction){
        arr.sort((a,b)=>{if(a.querySelector('.note').value>b.querySelector('.note').value){return direction}
    else{return -direction}
    })
    }
    render(arr,){
        this.inputContainer.innerHTML="";
        arr.forEach(el=>{this.inputContainer.append(el)})
    }
    changeIcon(arr){
        if(this.btnSort.classList.contains('img-sortUp')){
            this.btnSort.classList.add('img-sortDown');this.btnSort.classList.remove('img-sortUp'); this.sorter(arr,-1);
        }else{this.btnSort.classList.add('img-sortUp'); this.sorter(arr,1)}
    }
    init(){
        this.btnSort.addEventListener('click',(e)=>{
            e.preventDefault();
            let arr = this.getArr();
            this.changeIcon(arr,1);
            this.render(arr);
        })
    }
}
const start = function(){
    const myAssistant = new Assistant(addBtn,inputContainer);
    myAssistant.creator();
    myAssistant.deleteFirstInput();
    const mySorter = new SortAssistant(inputContainer, sort);
    mySorter.init();
}();