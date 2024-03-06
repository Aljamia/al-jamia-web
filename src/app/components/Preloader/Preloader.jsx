"use client";
import { useState, useEffect, useCallback } from "react";
import "./Preloader.css";
import Image from "next/image";

const TIMER = 100; // Milliseconds between moving the next block
const TRANSITION = 0.5; // Seconds to actually move one block
const DEF_SIZE = 100; // Pixels height/width
const GUTTER = 5; // Spacing in percentage between tiles

const Preloader = () => {
  const initialState = {
    positions: {
      1: "alpha",
      2: "bravo",
      3: "charlie",
      4: null,
      5: "delta",
      6: "echo",
      7: "foxtrot",
    },
    stateNumber: 0,
  };

  const [state, setState] = useState(initialState);

  const clipPathForPosition = (position) => {
    position = parseInt(position, 10);
    const SIZE = (100 - 2 * GUTTER) / 3;
    const VAR0 = "0% ";
    const VAR1 = SIZE + GUTTER + "% ";
    const VAR2 = 2 * SIZE + 2 * GUTTER + "% ";

    switch (position) {
      case 1:
        return "inset(" + VAR1 + VAR2 + VAR1 + VAR0 + " round 5%)";
      case 2:
        return "inset(" + VAR0 + VAR2 + VAR2 + VAR0 + " round 5%)";
      case 3:
        return "inset(" + VAR0 + VAR1 + VAR2 + VAR1 + " round 5%)";
      case 4:
        return "inset(" + VAR1 + VAR1 + VAR1 + VAR1 + " round 5%)";
      case 5:
        return "inset(" + VAR2 + VAR1 + VAR0 + VAR1 + " round 5%)";
      case 6:
        return "inset(" + VAR2 + VAR0 + VAR0 + VAR2 + " round 5%)";
      case 7:
        return "inset(" + VAR1 + VAR0 + VAR1 + VAR2 + " round 5%)";
      default:
        return "";
    }
  };

  const tileIndexToMove = useCallback(() => {
    switch (state.stateNumber) {
      case 0:
        return 7;
      case 1:
        return 6;
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 2;
      case 6:
        return 1;
      case 7:
        return 4;
      default:
        return 0;
    }
  },[state.stateNumber]);

  const positionForTile = useCallback((radioCommand) => {
    for (const position in state.positions) {
      const tile = state.positions[position];
      if (tile === radioCommand) {
        return position;
      }
    }
    return null;
  },[state.positions]);

  const callNext = useCallback(() => {
    const currentPositions = state.positions;
    const emptyIndex = positionForTile(null);
    const indexToMove = tileIndexToMove();
    const newPositions = {
      ...currentPositions,
      [indexToMove]: null,
      [emptyIndex]: currentPositions[indexToMove],
    };
  
    const currentState = state.stateNumber;
    const nextState = currentState === 7 ? 0 : currentState + 1;
  
    setState({ stateNumber: nextState, positions: newPositions });
  }, [state, positionForTile, tileIndexToMove]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      callNext();
    }, TIMER);
  
    return () => clearInterval(timer);
  }, [callNext]);
  
  const renderTiles = () => {
    return ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot"].map((radioCommand) => {
      const pos = positionForTile(radioCommand);
      const styles = {
        transition: TRANSITION + "s cubic-bezier(0.86, 0, 0.07, 1)",
        WebkitClipPath: clipPathForPosition(pos),
      };
      return <div key={"rect-" + radioCommand} style={styles} className={"rect " + radioCommand} />;
    });
  };

  return (
    <div className="wrapper_items_center">
      <div style={{ width: DEF_SIZE + "px", height: DEF_SIZE + "px" }} className="sw-loader__wrapper">
        <div className="sw-loader__holder">{renderTiles()}</div>
      </div>

      <div>
        <Image unoptimized={true} unselectable={true} src="/al_jamia_logo.png" layout="responsive" width={500} className="Preloader_img flash" height={500} alt="Image" />
      </div>
    </div>
  );
};

export default Preloader;
