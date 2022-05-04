
const ques = document.querySelector('.ques')
const answ = document.querySelector('.answ')
const body = document.querySelector('.body')
var bool = true;
export default class Body {
    constructor() {
        this.element = {};
        this.element.root = Body.create();
        this.element.item = this.element.root.querySelector('.item')
        this.element.release = this.element.root.querySelector('.release')
        this.element.question = this.element.root.querySelector('.question')
        this.element.toggle = this.element.root.querySelector('.toggle')
        this.element.answer = this.element.root.querySelector('.answer')
        this.element.btn = this.element.root.querySelector('.btn')
        this.element.edit = this.element.root.querySelector('.edit')
        this.element.del = this.element.root.querySelector('.del')

        this.element.question.innerHTML = ques.textContent
        this.element.answer.innerHTML = answ.textContent
        //handleToggle
        this.element.toggle.onclick = () =>{
            if(bool) {
                bool = false;
                this.element.answer.style.display = 'block'
            }else {
                this.element.answer.style.display = 'none'
                bool = true;
            } 
        }
        //handleEditbtn
        this.element.edit.onclick = () => {
            this.element.release.style.display = 'none'
            answ.innerHTML = '';
            ques.innerHTML = ques.textContent;
        }
        //handleDelbtn
        this.element.del.onclick = () => {
            this.element.release.style.display = 'none'
            ques.innerHTML = ''
            answ.innerHTML = ''
        }
    }

    static create() {
        const range = document.createRange();
        range.selectNode(document.body);
        return range.createContextualFragment(`
        <div class="item">
        <div class="release">
            <div class="question"></div>
            <div class="toggle">Show/Hide Answer</div>
            <div class="answer"></div>
            <div class="btn">
                <div class="edit">Edit</div>
                <div class="del">Delete</div>
            </div>
        </div>
        </div>
        `).children[0]
    }

}