
class sample1 {
    protected total=0;
    cmark(mark : number){
        this.total += mark
    }
}

class sample2 extends sample1 {
   add(){
    this.total +=10
   }
   status(){
    return this.total
   }
}

const sampleClass = new sample2()
sampleClass.status()