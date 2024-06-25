export abstract class AbsractExample {
    // от абстрактного класса мы не можем создать instance

    fatherName = "Ivan";
    radius = 12;

    // constructor(userName?: string, protected age: number = 31) {
    //     if (userName) this.name = userName;
    // }

    abstract requiredMethod(): number; // abstract требует чтобы наследник создал такой метод

    public getName(incomingName?: string): string {
        return incomingName || this.fatherName;
    }

    public hideScroll(): void {
        document.body.classList.add("no-scroll");
    }

    protected showScroll(): void {
        document.body.classList.remove("no-scroll");
    } // метод к которому мы имеем доступ внутри этого класса и внутри наследника, но не у экземпляра этого класса
}
