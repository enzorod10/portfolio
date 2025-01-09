export interface Project {
    name: string;
    pc_image: string;
    mobile_images: string[]
    info: string;
    liveLink: string;
    codeLink: string;
    techUsed: Tech[];
}

export interface Tech {
    name: string;
    image: string;
}