import React, { useState } from "react";
import { useFormikContext } from "formik";
import { useQueryClient } from "@tanstack/react-query";

import HistoryLink from "../../../Admin/HistoryLink";

import * as Styled from "./adminTeamMembers.styled";
import { AdminShowCaseServiceButton } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import { DeleteIcon } from "../../../../modules/shared/icons/components";

import {
  ITeamMembers,
  IServiceHistory,
} from "../../../../types/ServicesComponent.types";

import ButtonArrow from "../../../../utils/ButtonArrow";
import Arrow from "/public/upArrowSidebar.svg";

interface ITeamMembersComponent {
  teamMembers: ITeamMembers;
}

const TeamMembers = <T extends ITeamMembersComponent>({
  serviceName = "",
  queryKey = "",
}: IServiceHistory) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<T>([queryKey])?.teamMembers;

  const { values, handleChange, handleSubmit } = useFormikContext<T>();
  const [newMember, setNewMember] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { title, description, members, selectedMembers } =
    values.teamMembers ?? {
      title: "",
      description: "",
      members: [{ id: "", member: "" }],
      selectedMembers: [{ id: "", member: "" }],
    };

  const handleClick = () => handleSubmit();

  const selectMember = (id: string | undefined) => {
    const selectedMember = members.find((member) => member.id === id);

    if (selectedMember) {
      let updatedSelectedMembers;

      if (selectedMembers.find((member) => member.id === id)) {
        updatedSelectedMembers = selectedMembers.map((member) =>
          member.id === id ? selectedMember : member
        );
      } else {
        updatedSelectedMembers = [...selectedMembers, selectedMember];
      }

      handleChange({
        target: {
          name: "teamMembers.selectedMembers",
          value: updatedSelectedMembers,
        },
      });
    }
    setIsOpen(false);
  };

  const addMember = () => {
    if (newMember.trim() === "") {
      return;
    }

    const existingMemberIndex = members.findIndex(
      (member) => member.member === newMember
    );

    if (existingMemberIndex !== -1) {
      const updatedMembers = [...members];
      updatedMembers[existingMemberIndex] = {
        id: members[existingMemberIndex].id,
        member: newMember,
      };
      handleChange({
        target: {
          name: "teamMembers.members",
          value: updatedMembers,
        },
      });
    } else {
      const memberId = `${Math.random() * 1000000}`;
      const updatedMembers = [
        ...members,
        {
          id: memberId,
          member: newMember,
        },
      ];
      handleChange({
        target: {
          name: "teamMembers.members",
          value: updatedMembers,
        },
      });
    }

    setNewMember("");
  };

  const deleteSelectedMember = (index: number) => {
    const deleteSelectedMembers = selectedMembers.filter((_, i) => i !== index);

    handleChange({
      target: {
        name: "teamMembers.selectedMembers",
        value: deleteSelectedMembers,
      },
    });
  };

  const deleteMember = (index: number) => {
    const deleteMembers = members.filter((_, i) => i !== index);

    handleChange({
      target: {
        name: "teamMembers.members",
        value: deleteMembers,
      },
    });
  };

  return (
    <div style={{ marginBottom: 50 }}>
      <Styled.Wrapper>
        <Styled.TextBlock>
          <Styled.Subtitle>Subtitle</Styled.Subtitle>
          <Styled.TitleInput
            name="teamMembers.title"
            value={title}
            onChange={handleChange}
          />
          <Styled.Description>Text</Styled.Description>
          <Styled.DescriptionInput
            name="teamMembers.description"
            value={description}
            onChange={handleChange}
          />
        </Styled.TextBlock>
        <Styled.MembersBlock>
          <Styled.AddMembers>
            <Styled.MembersInput
              placeholder="Add NEW member"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
            />
            <Styled.AddMembersButton onClick={addMember}>
              +
            </Styled.AddMembersButton>
          </Styled.AddMembers>
          <Styled.MembersDropdown>
            <Styled.DropdownButton
              onClick={() => setIsOpen(!isOpen)}
              isOpen={isOpen}
            >
              {"// Choose one member"}
              <img width={9} height={5} src={Arrow.src} alt="Arrow" />
            </Styled.DropdownButton>
            <Styled.DropdownContent isOpen={isOpen}>
              {members?.map((member, index) => (
                <div key={member.id} onClick={() => selectMember(member.id)}>
                  <p>{member.member}</p>
                  <Styled.DeleteMember
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteMember(index);
                    }}
                  >
                    <DeleteIcon />
                  </Styled.DeleteMember>
                </div>
              ))}
            </Styled.DropdownContent>
            <Styled.SelectedContent isOpen={isOpen}>
              {selectedMembers?.map((member, index) => (
                <AdminShowCaseServiceButton
                  key={index}
                  onClick={() => deleteSelectedMember(index)}
                >
                  {member.member} <span>x</span>
                </AdminShowCaseServiceButton>
              ))}
            </Styled.SelectedContent>
          </Styled.MembersDropdown>
        </Styled.MembersBlock>
      </Styled.Wrapper>
      {data?.lastModified && (
        <HistoryLink
          sectionName="Team Members"
          lastModified={data?.lastModified}
          link={`/history/${serviceName}/teamMembers`}
        />
      )}
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "1.33em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </div>
  );
};

export default TeamMembers;
