"use client"
import React from 'react'
import { useEffect , useState } from 'react'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { eslint } from 'next.config'

const inter = Inter({ subsets: ['latin'] })

export default function Home() 
{
  const [Pokemon,setPokemon]=useState([]);
  useEffect(()=>{
async function getPokemon(){
  const resp= await fetch ("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
setPokemon(await resp.json());
}
 getPokemon();
 },[])
  return (
      <div>
      
        <h1>pokemon list </h1> 
         
        <div className={styles.grid}>
          {
            Pokemon.map((Pokemon)=>(
<div className={styles.card} key={Pokemon.id}>
<Link href={`/pages/pokemon/${Pokemon.id}`}>

<img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${Pokemon.image}`} alt={Pokemon.name}/>

<h3 > {Pokemon.name}</h3>

</Link>
</div>
            ))
          }
          </div>   
      </div>
   
  );
}
