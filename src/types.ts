export interface Project {
    name: string;
    image: string;
    info: string;
    liveLink: string;
    codeLink: string;
    techUsed: Tech[];
}

export interface Tech {
    name: string;
    image: string;
}