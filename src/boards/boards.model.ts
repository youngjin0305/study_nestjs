// 임시 파일
export interface Board {
    id: number;
    title: string;
    description: string;
    status: BoardStatus;
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}