import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/product';


interface ProductListProps {
  products: Product[]; // products prop will be an array of Product
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return <p>No products match your search query.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Year 1 Sem 1 */}
      <div className="col-span-full">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">1st Year - Semester 1</span></h1>
      </div>
      <ProductCard title='MTH-S101' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:f4dbc2c1-3efc-409d-8b2e-0893f089a2c3'}/>
      <ProductCard title='PHY-S101' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:171608c0-3cf8-4288-a051-f5bf4809a383'}/>
      <ProductCard title='TCA-S102' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:d9ee8768-8d39-40cb-a196-1318b7b1082b'}/>
      <ProductCard title='CHM-S101' image='https://picsum.photos/800/300' href={'#'}/>
      <ProductCard title='ESC-S101' image='https://picsum.photos/800/300' href={'#'}/>
      <ProductCard title='UHV-S101' image='https://picsum.photos/800/300' href={'#'}/>

      {/* Year 1 Sem 2 */}
      <div className="col-span-full">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">1st Year - Semester 2</span></h1>
      </div>
      <ProductCard title='MTH-S102' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:c8fced0f-2d74-411a-bb95-299de626412f'}/>
      <ProductCard title='PHY-S102' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:8bed5d40-4d41-473b-a36d-6eeeff495249'}/>
      <ProductCard title='ISC-S101' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:18b06cc4-86cc-41f7-a531-3fdf9612e1c5'}/>
      <ProductCard title='TCA-S101' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:cf49b754-e51d-43f5-bd21-fc8e25e9dd6b'}/>
      <ProductCard title='HSS-S101' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:ef186bd6-4842-4842-8869-afa8aa3b0e86'}/>

      {/* Year 2 Sem 3 */}
      <div className="col-span-full">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">2nd Year - Semester 3</span></h1>
      </div>
      <ProductCard title='MTH-S201' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:262f8edb-b9e8-4d3b-b999-c06569adc179'}/>
      <ProductCard title='CSE-S207' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:193960f1-f08a-4e36-ba6d-0bfb658c5ec4'}/>
      <ProductCard title='CSE-S202' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:150a03f7-38d9-4269-aeda-243e2ed5d4ef'}/>
      <ProductCard title='MTH-S301.' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:c9966ad3-7581-41b7-9002-11bcb8af98dc'}/>
      <ProductCard title='UHV-S201' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:3b100086-b331-444f-a2e7-ed16fbde24ec'}/>
    
    {/* Year 2 Sem 4 */}
    <div className="col-span-full">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">2nd Year - Semester 4</span></h1>
      </div>
      <ProductCard title='HSS-S401' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:a16f2b61-1b4d-47e1-b82f-60fb396753f1'}/>
      <ProductCard title='CSE-S208' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:a3750c92-47f2-499b-b7ab-c370f98f8d27'}/>
      <ProductCard title='CSE-S206' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:c4313d9f-3cc2-4a05-8cfa-f835f05dde4e'}/>
      <ProductCard title='MTH-S504' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:b2040c53-9a82-4fd2-83e6-c3f8af194922'}/>
      <ProductCard title='CSE-S205' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:d68b1173-6883-4a74-bbc0-de1487aae2f4'}/>
      <ProductCard title='EVS-S101' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:fb8bf8f8-59d1-4459-b502-899a20a5a515'}/>

    {/* Year 3 Sem 5 */}
    <div className="col-span-full">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">3rd Year - Semester 5</span></h1>
      </div>
      <ProductCard title='CSE-S301' image='https://picsum.photos/800/300' href={'#'}/>
      <ProductCard title='CSE-S302' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:17aa91f0-25fa-4370-8b9a-458159fc20fe'}/>
      <ProductCard title='CSE-S518' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:e762dedb-9ae0-4073-beb3-4652498c9942'}/>
      <ProductCard title='CSE-S304' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:5f02a82f-8946-4802-b4d1-f486ee2a84c3'}/>
      <ProductCard title='CSE-S308' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:cb6c228d-2a73-4d5e-acf4-6eb58d739825'}/>

{/* Year 3 Sem 6 */}
<div className="col-span-full">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">3rd Year - Semester 6</span></h1>
      </div>
      <ProductCard title='CSE-S511' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:6a7325c9-dbed-458d-a621-56b52595b769'}/>
      <ProductCard title='CSE-S306' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:6a7325c9-dbed-458d-a621-56b52595b769'}/>
      <ProductCard title='CSE-S307' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:994d6a46-0bf3-4502-9c2a-eb8022d0b61a'}/>
      <ProductCard title='CAP-S101' image='https://picsum.photos/800/300' href={'#'}/>
      <ProductCard title='CSE-S520' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:69da4daa-442c-47bb-ab38-6bfb575e388c'}/>

{/* Year 4 Sem 7 */}
<div className="col-span-full">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4TH Year - Semester 7</span></h1>
      </div>
      <ProductCard title='CSE-S513' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:13878e22-e2df-48de-9401-007e243bbdfd'}/>
      <ProductCard title='SST-S401' image='https://picsum.photos/800/300' href={'#'}/>
      <ProductCard title='MRT-S401' image='https://picsum.photos/800/300' href={'#'}/>
      <ProductCard title='CSE-S526' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:1ca8b140-fa2e-4ad3-8018-e94f4b4510eb'}/>
      <ProductCard title='CSE-S507 (Elec.)' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:e125febf-4914-4edc-8880-58c699064e17'}/>
      <ProductCard title='CSE-S521 (Elec.)' image='https://picsum.photos/800/300' href={'https://acrobat.adobe.com/id/urn:aaid:sc:AP:62a88705-99be-48be-9551-955fa8f8fff6'}/>

      {/* Year 4 Sem 8 */}
<div className="col-span-full">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4TH Year - Semester 8</span></h1>
      </div>
      <ProductCard title='MRT-S402' image='https://picsum.photos/800/300' href={'#'}/>
    </div>
  );
};

export default ProductList;
