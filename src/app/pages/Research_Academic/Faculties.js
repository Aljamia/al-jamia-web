// Import the required modules
"use client";
import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import "./Faculties.css";
import { getBoardOfDirector } from "@/app/hooks/UseApi";
import Image from "next/image";

const Faculties = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const fetchBoard = async () => {
      const data = await getBoardOfDirector();
      console.log(data);
      setBoard(data?.response);
    };
    fetchBoard();
  }, []);

  return (
    <div className="Faculties">
      <PageHeader />
      <div className="Faculties-header">
        <Container>
          <h2 className="Faculties-title">
          Al Jamia Centre for Research & Academic Excellence
          </h2>
          <div className="Faculties-img">
            <Image
              src="/Mask group.png"
              layout="responsive"
              width={1000}
              height={200}
              alt="Image"
            />
          </div>
          <p className="Faculties-desc">
          The Al Jamia Centre for Research & Academic Excellence serves as an internal platform within Al Jamia for 
promoting research skills and academic excellence among both undergraduate and postgraduate 
students. To achieve this goal, it offers various academic programs such as research workshops, expert 
talks, and interactive sessions across different disciplines. The aim is to foster and enhance research oriented soft skills among the students.
<br/>
<br/>
Additionally, the center organizes annual academic seminars and international conferences on Islam and 
various contemporary issues. It also plays a pivotal role in coordinating yearlong research activities for 
final-year undergraduate and postgraduate students. This includes assisting students in selecting topics, 
assigning supervisors and examiners, and guiding them through the process of their thesis submission.<br/>
<br/>
Furthermore, the center plans to arrange an annual program called the Thesis Open Defense. During this 
event, expert scholars and researchers from within Al Jamia and beyond evaluate both the presentation 
and written thesis. In line with its commitment to academic dissemination, the center has plans to publish 
a bilingual research journal titled "Al Jamia Journal of Islamic Studies & Research" twice a year.
          </p>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Faculties;
