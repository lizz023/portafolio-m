import React, { useEffect, useState } from "react";
import "./Bubble.css";

const generateBubble = () => ({
    size: `${Math.random() * 80 + 20}px`, // Tamaño entre 20px y 100px
    left: `${Math.random() * 100}%`, // Posición aleatoria en el ancho
    duration: `${Math.random() * 4 + 3}s`, // Duración entre 3s y 7s
});

const Bubble = () => {
    const [bubbles, setBubbles] = useState(Array.from({ length: 10 }, generateBubble));

    useEffect(() => {
        const interval = setInterval(() => {
            setBubbles((prev) => [...prev.slice(1), generateBubble()]); // Elimina la más vieja y agrega una nueva
        }, 2000); // Cada 2 segundos se agrega una nueva burbuja

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bubbles">
            {bubbles.map((bubble, index) => (
                <div
                    key={index}
                    className="bubble"
                    style={{
                        width: bubble.size,
                        height: bubble.size,
                        left: bubble.left,
                        animationDuration: bubble.duration,
                    }}
                />
            ))}
        </div>
    );
};

export default Bubble;
