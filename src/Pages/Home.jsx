import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Slider, Typography } from '@mui/material';
import { Breadcrumb, BreadcrumbItem, Label, Pagination, Select, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiHome } from 'react-icons/hi';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { FaCartPlus } from 'react-icons/fa6';
import { FaPlus, FaSearch } from 'react-icons/fa';

const minDistance = 100;
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const numberOfPage = Math.ceil(parseInt(63 / itemsPerPage));
  const [searchText, setSearchText] = useState('');
  // sort and filter
  const [order, setOrder] = useState('');
  const handleChangeOrder = e => {
    setLoading(true);
    setOrder(e.target.value);
    setCurrentPage(1);
  };

  //Handle searchsubmit
  const handleSearch = e => {
    e.preventDefault();
    setCurrentPage(1);
    setLoading(true);
    setSearchText(e.target.search.value);
  };

  const onPageChange = page => {
    setLoading(true);
    setCurrentPage(page);
  };
  const handleItemPerPage = e => {
    setLoading(true);
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

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

  // API Requests
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_DB_URL}/products?page=${currentPage}&items=${itemsPerPage}&order=${order}&filter=${searchText}`)
      .then(res => {
        setProducts(res.data);
      });
    setLoading(false);
  }, [currentPage, itemsPerPage, order, searchText]);

  return (
    <div className=" relative bg-[#f2f4f8]">
      {loading && (
        <div className="h-[100vh] bg-[#00000025] fixed top-0 left-0  w-[100vw] z-50 flex items-center justify-center">
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      )}
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
          {/* Search Bar */}
          <div className="max-w-[400px] relative mt-7 mb-2 mx-auto">
            <form onSubmit={handleSearch}>
              <input placeholder="Search" className="w-full rounded-md border-[#666]" type="text" name="search" id="" />
              <button type="submit" className="absolute top-1/2 right-4 -translate-y-1/2">
                <FaSearch></FaSearch>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-[1280px] flex gap-6 py-8 px-4 mx-auto">
        {/* Sidebar  */}
        <div className="max-w-[280px] w-[280px] ">
          {/* Price Range Slider */}
          <div className="rounded-[7px] mb-2 single_box  bg-white">
            <h3 className="text-[#111] p-[22px] text-[17px] border-b border-[#eee] pb-[10px]">Price Range</h3>
            <div className="p-[22px]">
              <div className="mx-4">
                <Slider
                  getAriaLabel={() => 'Minimum distance shift'}
                  value={value1}
                  min={0}
                  max={100000}
                  onChange={handleChange1}
                  valueLabelDisplay="auto"
                  disableSwap
                />
              </div>
              <div className="flex text-[14px] mt-5 items-center justify-between">
                <p className="py-1 w-[80px] text-center border">{value1[0]}</p>
                <p className="py-1 w-[80px] text-center border">{value1[1]}</p>
              </div>
            </div>
          </div>
          {/* Price range slider end here */}
          {/* Product Brand Catogory Sorting */}
          <div>
            <Accordion className="px-2" defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                <Typography className="text-[#111] accor-heading text-[17px] w-full pt-[5px] pb-[10px] border-b border-[#eee] ">
                  Brand
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel control={<Checkbox size="small" />} label="Apple" />
                  <FormControlLabel control={<Checkbox size="small" />} label="Hp" />
                  <FormControlLabel control={<Checkbox size="small" />} label="Asus" />
                  <FormControlLabel control={<Checkbox size="small" />} label="Dell" />
                  <FormControlLabel control={<Checkbox size="small" />} label="Acer" />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white single_box mb-2  py-[10px] px-[20px] ">
            {/* Sort and pagination items count bar */}
            <div className="flex py-[4px] items-center justify-between">
              <h2 className="text-[16px] font-semibold">All Laptop</h2>
              <div className="flex items-center gap-3">
                <div className="max-w-sm flex gap-2 items-center">
                  <Label className="text-[#666] font-semibold text-[13px]" htmlFor="itemNumber" value="Show:" />
                  <Select onChange={handleItemPerPage} value={itemsPerPage} id="itemNumber" required>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </Select>
                </div>
                <div className="max-w-sm flex gap-2 items-center">
                  <Label className="text-[#666] font-semibold text-[13px]" htmlFor="sort" value="Sort By: " />
                  <Select onChange={handleChangeOrder} id="sort" required>
                    <option value="">Default</option>
                    <option value="low">{`Price (Low > High)`}</option>
                    <option value="high">{`Price (High > Low)`}</option>
                    <option value="date">{`Date Added : Newest first`}</option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          {/* Products  */}
          <div className="grid grid-cols-4 gap-2">
            {products &&
              products.map(item => {
                return (
                  <div key={item._id} className="bg-white flex flex-col single_box">
                    <div className="p-5 relative border-b-[2px]">
                      <img className="w-full" src={item.productImage} alt="" />
                      <span className="text-[12px] bg-[#662A8F] absolute left-0 top-4 py-[3px] px-[15px] text-white rounded-tr-full rounded-br-full">
                        Save: ${Math.floor(item.price - item.discountPrice)}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h4 className="text-[15px] flex-grow-0 font-semibold  mb-4">
                        <a className="hover:text-primary hover:underline" href="#">
                          {item.productName}
                        </a>
                      </h4>
                      <div className="flex-1 pb-3 border-b">
                        <ul className="text-[#666] text-[13px]  space-y-[10px] list-disc ml-3">
                          {item.description.map(items => {
                            return <li key={items}>{items}</li>;
                          })}
                        </ul>
                      </div>
                      <div className="flex flex-grow-0 items-center mt-3 justify-center gap-2">
                        <span className="text-primary text-[16px] font-semibold">$ {item.price}</span>
                        <span className="text-[12px] font-medium text-[#666] line-through">$ {item.discountPrice}</span>
                      </div>
                      <div className="mt-3">
                        <button className="flex hover:bg-secondary hover:text-white text-secondary justify-center rounded-[5px] py-[8px] items-center gap-2 bg-[#F5F6FB] w-full">
                          <FaCartPlus></FaCartPlus> <span className="text-[13px] font-medium">Buy Now</span>
                        </button>
                        <button className="flex mt-3 hover:bg-[#F5F6FB] hover:text-[#222] text-[#666666] justify-center rounded-[5px] py-[8px] items-center gap-2 w-full">
                          <FaPlus className="text-[14px]"></FaPlus> <span className="text-[13px] font-medium">Add to compare</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* Paginations */}
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={numberOfPage} onPageChange={onPageChange} showIcons />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
