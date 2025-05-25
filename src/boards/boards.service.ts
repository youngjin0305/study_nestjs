import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto): Board {
        const { title, description } = createBoardDto;
        const board: Board = {
            id: Date.now(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        };
        this.boards.push(board);
        return board;
    }

    getBoardById(id: number): Board {
        const found = this.boards.find((board) => board.id === id);
        if (!found) {
            throw new NotFoundException(`Board with ID ${id} not found`);
        }
        return found;
    }

    deleteBoard(id: number): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    updateBoardStatus(id: number, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}   
