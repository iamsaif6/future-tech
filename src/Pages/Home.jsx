import { Slider } from '@mui/material';
import { Breadcrumb, BreadcrumbItem, Label, Select } from 'flowbite-react';
import { useState } from 'react';
import { HiHome } from 'react-icons/hi';

function valuetext(value1) {
  return `${value1}°C`;
}

const minDistance = 100;

const Home = () => {
  //Price Range Slider
  const [value1, setValue1] = useState([0, 100000]);
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div className="bg-[#f2f4f8]">
      {/* Breadcrubms */}
      <div className="bg-white border border-b-[1px] border-[#ddd]">
        <div className="max-w-[1280px] py-8 px-4 mx-auto">
          <Breadcrumb className="text-[#9999]" aria-label="Default breadcrumb example">
            <BreadcrumbItem href="#" icon={HiHome}></BreadcrumbItem>
            <BreadcrumbItem className="hover:underline" href="#">
              Laptop
            </BreadcrumbItem>
            <BreadcrumbItem>All Laptop</BreadcrumbItem>
          </Breadcrumb>
          <section>
            <h1 className="text-secondary mb-[5px] mt-[15px] text-[22px]">Laptop Price in Bangladesh</h1>
            <p className="text-[13px]">
              Laptop Price starts from BDT 27,500 to BDT 1,095,000 in Bangladesh, depending on Brand, Specifications, and Features. Buy
              original branded laptop from Future Tech Laptop shop in BD. Browse below and Order yours now!
            </p>
          </section>
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-[1280px] flex gap-6 py-8 px-4 mx-auto">
        {/* Sidebar  */}
        <div className="max-w-[280px] w-[280px] ">
          {/* Price Range Slider */}
          <div className="rounded-[7px] single_box  bg-white">
            <h3 className="text-[#111] p-[22px] text-[17px] border-b border-[#eee] pb-[10px]">Price Range</h3>
            <div className="p-[22px]">
              {/* Slider Componet */}
              <div className="mx-4">
                <Slider
                  getAriaLabel={() => 'Minimum distance shift'}
                  value={value1}
                  min={0}
                  max={100000}
                  onChange={handleChange1}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                />
              </div>
              <div className="flex text-[14px] mt-5 items-center justify-between">
                <p className="py-1 w-[80px] text-center border">{value1[0]}</p>
                <p className="py-1 w-[80px] text-center border">{value1[1]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white single_box flex-1 py-[10px] px-[20px] ">
          {/* Sort and pagination items count bar */}
          <div className="flex  items-center justify-between">
            <h2 className="text-[16px] font-semibold">All Laptop</h2>
            <div className="flex items-center gap-3">
              <div className="max-w-sm flex gap-2 items-center">
                <Label className="text-[#666] font-semibold text-[13px]" htmlFor="itemNumber" value="Show:" />
                <Select id="itemNumber" required>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                </Select>
              </div>
              <div className="max-w-sm flex gap-2 items-center">
                <Label className="text-[#666] font-semibold text-[13px]" htmlFor="sort" value="Sort By: " />
                <Select id="sort" required>
                  <option>Default</option>
                  <option>{`Price (Low > High)`}</option>
                  <option>{`Price (High > Low)`}</option>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
