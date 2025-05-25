import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../boards.model";

export class BoardStatusValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        throw new Error("Method not implemented.");
    }
    readonly StatusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    transfrorm(value: any, metadata: ArgumentMetadata){
        value = value.toUpperCase();

        if(this.isStatusValid(value)){
            throw new BadRequestException(`${value} isn't in the status options`);
        }

        return value;
    }

    private isStatusValid(status: any): boolean {
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}