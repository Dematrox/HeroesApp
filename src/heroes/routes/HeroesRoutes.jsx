import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/NavBar"
import { DCPages, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="ms-3">

            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DCPages />} />
                <Route path="search" element={<SearchPage />} />

                <Route path="hero/:id" element={<HeroPage />} />
                <Route path="/" element={<Navigate to="/search" />} />
            </Routes>

        </div>

    </>
  )
}
