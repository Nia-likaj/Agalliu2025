export type EquipmentItem = {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  specs?: string[];
};

export interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string[];
  image: string;
}
