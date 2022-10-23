import * as contentActions from "../actionCreators/contentAC";
import {InferValueTypes} from "../../utils/tsUtils";
import {Post} from "../../types/posts";

export interface ContentState {
    readonly posts: Post[];

}

export type ContentAction = ReturnType<InferValueTypes<typeof contentActions>>;
