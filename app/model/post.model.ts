export class PostModel{
   /* 
    public postID: number;
    public name: string;
    public dp: string;
    public content: string;
    public image: string;
    */
    constructor(
        /*
        postID:number,
        name: string,
        dp: string,
        content: string,
        image: string
        */
        public postID: number,
        public name: string,
        public dp: string,
        public content: string,
        public image: string,
    ) 
    {
        /*
        this.postID = postID,
        this.name = name,
        this.dp = dp,
        this.content = content,
        this.image = image
        */
       this.dp += name + ".png"
    }
}

