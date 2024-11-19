import React from "react";
import { useState } from "react"

export default function ProfileCard({ firstName, lastName, email, avatar, socialMediaLinks}) {
    const testProfile = {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        avatar: {
            img: "https://example.com/avatar.jpg",
            altText: "John Doe's avatar"
        },
        socialMediaLinks: {
            twitter: "johndoe",
            facebook: "johndoe",
            linkedin: "johndoe"
        }
    }
    return (
        <section className=" bg-white dark:bg-grey-500">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold capitalize lg:text-4xl text- white">List of Users</h1>
                <div className="grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2">
                    <div className="lg:flex">
                        <img src={testProfile.avatar.img} alt={testProfile.avatar.altText} className="object-cover"/>
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <h3 className=""></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
