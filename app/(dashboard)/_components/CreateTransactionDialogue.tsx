"use client";

import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { TransactionType } from "@/lib/type";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

interface Props{
    trigger: ReactNode;
    type: TransactionType;
}

import React from 'react'

function CreateTransactionDialogue({trigger, type}: Props) {
  return (
    <Dialog>
        <DialogTrigger asChild>
            {trigger}
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                Create a new{" "}
                <span className={cn("m-1", type == "income" ? "text-emerald-500" : "text-red-500")}>{type}</span>
                transaction
                </DialogTitle>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default CreateTransactionDialogue
