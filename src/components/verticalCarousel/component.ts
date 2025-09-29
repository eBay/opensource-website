export enum Aspect {
  Null = "null",
  Projects = "projects",
  Partnerships = "partnerships",
  Media = "media",
  HowTo = "howTo",
}
export enum EbayColor {
  RED = "#e53238",
  BLUE = "#0064d2",
  YELLOW = "#f5af00",
  GREEN = "#86b816",
  GRAY = "#d3d3d3",
}
export interface Input {
  aspect: string;
}

export interface State {
  aspect: string;
}

export default class extends Marko.Component<Input, State> {
  onCreate(aspect: string) {
    const initState: State = {
      aspect: aspect,
    };
    this.state = initState;
  }
  setAspect(aspect: Aspect) {
    this.state.aspect = aspect;
  }
  setProjects() {
    this.setAspect(Aspect.Projects);
  }
  setPartnerships() {
    this.setAspect(Aspect.Partnerships);
  }
  setMedia() {
    this.setAspect(Aspect.Media);
  }
  setHowTo() {
    this.setAspect(Aspect.HowTo);
  }
}
