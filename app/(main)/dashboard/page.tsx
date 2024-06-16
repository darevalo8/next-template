'use client';

import { increment } from '@/lib/features/counter/counterSlice';
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks';
import { Button } from 'antd';
import { useRef } from 'react';

export default function Dashboard() {
  // Initialize the store with the counter information
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    // store.dispatch(initializeProduct(product))
    initialized.current = true;
  }
  const counter = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <main>
      <h1>Hola Dashboard {counter}</h1>
      <Button onClick={() => dispatch(increment())}>Click me</Button>
    </main>
  );
}
