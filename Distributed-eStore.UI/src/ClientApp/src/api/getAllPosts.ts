import { getAllPostsUrl } from "../constants"
import { IProduct } from "../state/products/"
import axios from "axios";

export const getAllPosts: () => Promise<Readonly<IProduct[]>> = async () => {
    return (await (axios.get<Array<IProduct>>(getAllPostsUrl))).data;
}