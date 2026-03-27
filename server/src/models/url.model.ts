import mongoose, {Schema,Document} from "mongoose";

export interface IUrl extends Document{
    original_url: string;
    short_code: string;
    click_count: number;
    created_at: Date;
}

const urlSchema = new Schema<IUrl>({
    original_url: {
        type: String, 
        required: true
    },
    short_code: {
        type: String,
        required: true,
        unique: true,
        index:true
    },
    click_count: {
        type: Number, 
        default: 0
    },
    created_at: {
        type: Date, 
        default: Date.now
    },


});

export default mongoose.model<IUrl>("Url", urlSchema);