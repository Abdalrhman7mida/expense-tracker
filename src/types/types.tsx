export interface fExpenceForm {
    title: string;
    amount: number;
    date: Date;
}

export interface fExpence extends fExpenceForm {
    id: string;
}

