const student={
    id:101,
    name:'rj kibrea',
    balande:5000,
    major:'mathematics',
    subjects:['english','economics','math 101','calculas'],
    isRich:false,
    bestFriend:{
        name:'kundu',
        major:'mathematics'
    },
    takeExam:function(){
        console.log(this.name,"taking exam")
    },
    treatDay:function(expence){
        this.balande=this.balande-expence;
        return this.balande;
    }

}

// student.takeExam();
// const remaining=student.treatDay(500);
console.log(student.balande)