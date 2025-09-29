interface RandomizedParam {
  heightWidth: string;
  color: string;
  bottomPosition: string;
  leftPosition: string;
}

interface ProjectSquareProps {
  title: string;
  desc: string;
  langs: string[];
  website: string;
}

interface PartnershipSquareProps {
  title: string;
  desc: string;
  website: string;
}

export type { RandomizedParam, ProjectSquareProps, PartnershipSquareProps };
